// this is aliased in webpack config based on server/client build
import Vuex from "vuex"
import Vue from "vue"
import Vapi from "vuex-rest-api"

const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

const generatePath = (type, item = true) =>
  (args) => {
    let path = ``
    for (let req of type.reqs) {
      path += `/${req}s/${args[req]}`
    }
    console.log(args)
    return path + `/${type.name}s` + (item ? `/${args.id}` : ``)
  }

Vue.use(Vuex)

export function createStore () {
  let store = new Vapi({
    baseURL: "http://localhost:8081", //"https://ntnu.blackboard.com/learn/api/public/v1",
    state: {
      announcements: [],
      courses: [],
      dataSources: [],
      terms: [],
      users: []
    }
  })

  let types = [
    {
      name: 'announcement',
      reqs: [],
    },
    {
      name: 'course',
      reqs: [],
    },
    {
      name: 'content',
      reqs: ['course'],
    },
    {
      name: 'dataSource',
      reqs: [],
    },
    {
      name: 'term',
      reqs: [],
    },
    {
      name: 'user',
      reqs: [],
    },
    {
      name: 'group',
      reqs: ['course'],
    },
  ]

  for (let type of types) {
    store
      .get({
        action: `list${camelize(type.name)}s`,
        property: `${type.name}s`,
        path: generatePath(type, false)
      })
      .post({
        action: `add${camelize(type.name)}`,
        property: `${type.name}`,
        path: generatePath(type, false)
      })
      .get({
        action: `get${camelize(type.name)}`,
        property: `${type.name}`,
        path: generatePath(type)
      })
      .patch({
        action: `update${camelize(type.name)}`,
        property: `${type.name}`,
        path: generatePath(type)
      })
      .delete({
        action: `delete${camelize(type.name)}`,
        property: `${type.name}`,
        path: generatePath(type)
      })
  }

  return new Vuex.Store(store.getStore())
}
