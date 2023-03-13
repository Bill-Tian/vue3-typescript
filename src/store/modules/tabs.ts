import { defineStore } from 'pinia'
import { store } from '../index'
import { reactive } from 'vue';

import type { Itab } from '../type'

interface State {
    tabList: Array<Itab>
}
export const tabsCounterStore = defineStore("tabs", () => {

    state: () => ({
        tabList: [],
    })

    actions: {
        addTab(state, tab: Itab) {
            tabList.value.some(item => item.path === tab.path)
        },
    },

})


export const tabsCounterStoreWithOut = () => {
    return tabsCounterStore(store)
  }