// 数据业务 模块化
import Loki from 'lokijs'

export const db = new Loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage' // 持久化 localStorage
})

function databaseInitialize () {
  const notes = db.getCollection('notes')
  if (notes === null) {
    db.addCollection('notes') // 添加一个表 notes
  }
}

export function loadCollection (collection) {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection)
      resolve(_collection)
    })
  })
}
