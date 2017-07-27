import express from 'express'
import Authentication from './Authentication'
import Login from './components/Login'
import Users from './components/Users'

const MountPublicRoutes = (app) => {
  app.get    ('/api/status', (req, res) => res.json({ success: true }) )
  app.post   ('/api/register', Users.register )
  app.post   ('/api/login', Login.login, Login.success, Login.error )
  app.get    ('/api/logout', Login.logout )
}

const MountAPIRoutes = (app) => {
  const ensureLogin = Authentication.ensureLogin
  app.get    ('/api/profile', ensureLogin, Users.getCurrent )
}

const MountClientRoutes = (app) => {
  app.get ('/app/?.*', function (req, res) {
    res.sendFile('/client/build/index.html', { 'root': __dirname + '/../' })
  })

  app.get ('/', function (req, res) {
    res.sendFile('/public/index.html', { 'root': __dirname + '/../' })
  })

  app.use ('/app', express.static('client/build'))
  app.use ('/public', express.static('client/build'))
  app.use(express.static('public'))
}

const MountMockAPIRoutes = (app) => {
  const ensureLogin = Authentication.ensureLogin
  app.get ('/api/status', (req, res) => res.json({ success: true }))

  // period = week/month
  app.get ('/api/statistics', (req, res) => res.json({
    success: true,
    statistics: {
      current_period_range: {
        start: "2017-07-21T00:00:00.000Z",
        end: "2017-07-28T00:00:00.000Z"
      },
      previous_period_range: {
        start: "2017-07-14T00:00:00.000Z",
        end: "2017-07-21T00:00:00.000Z"
      },
      relative_to_previous: [
        {
          key: "items_published",
          title: "Items Published",
          value: 180,
          previous_value: 160,
          outcome: "positive"
        }, {
          key: "open_rate_avg",
          title: "Open Rate",
          value: "65%",
          previous_value: "69%",
          outcome: "negative"
        }
      ],
      opened_top_partners: [
        {
          partner_id: "verizon",
          partner_title: "Verizon",
          value: 11
        }, {
          partner_id: "sprint",
          partner_title: "Sprint",
          value: 9
        }
      ]
    }
  }))

  // subject, os, content_type, complexity, device, format, author
  app.get ('/api/items', (req, res) => res.json({
    success: true,
    items: [
      {
        id: "2-tips-for-faster-texting",
        title: "2 tips for faster texting",
        slug: "2-tips-for-faster-texting",
        public_url: "kb.mysoluto.com...",
        edit_url: "kb.mysoluto.com...",
        last_activity: "2017-07-24T22:44:30.652Z",
        author: {
          id: "daphna",
          name: "Daphna Navot",
          avatar_url: ""
        },
        score: 78,
        categories: [
          {
            id: "security",
            title: "Security"
          }
        ]
      }
    ]
  }))
  app.get ('/api/items/:itemId', (req, res) => res.json({
    success: true,
    item: {
      id: "2-tips-for-faster-texting",
      title: "2 tips for faster texting",
      slug: "2-tips-for-faster-texting",
      public_url: "kb.mysoluto.com...",
      edit_url: "kb.mysoluto.com...",
      last_activity: "2017-07-24T22:44:30.652Z",
      author: {
        id: "daphna",
        name: "Daphna Navot",
        avatar_url: ""
      },
      categories: [
        {
          id: "security",
          title: "Security",
        }
      ],
      scores: [
        {
          key: "overall",
          title: "Overall",
          score: 78
        }, {
          key: "open_rate",
          title: "Open Rate",
          score: 74
        }
      ],
      tags: [
        "Galaxy S6",
        "Keyboard",
        "shortcuts"
      ]
    }
  }))
  app.get ('/api/categories/:categoryId', (req, res) => res.json({
    success: true,
    category: {
      id: "security",
      title: "Security",
      scores: [
        {
          key: "open_rate",
          title: "Open Rate",
          score: 64
        }
      ]
    }
  }))
}

export default {
  mount: (app) => {
    // MountPublicRoutes(app)
    // MountAPIRoutes(app)
    // MountClientRoutes(app)
    MountMockAPIRoutes(app)
  }
}
