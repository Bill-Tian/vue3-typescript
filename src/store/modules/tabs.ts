import { defineStore } from 'pinia'
import { store } from '../index'

import type { Itab } from '../type'

interface TabState {
    tabList: Array<Itab>
}
export const tabsCounterStore = defineStore("tabs", {

    state: (): TabState => ({
        tabList: []
    }),

    getters: {
        getAddTab(state: TabState) {
            return state.tabList
        },
    },

    actions: {
        addTab(tab: Itab) {
            const isSome = this.tabList.some(item => item.path === tab.path)
            if (!isSome) {
                this.tabList.push(tab)
            }
        },
        removeTab(targetPath: string) {
            const index = this.tabList.findIndex(item => item.path === targetPath);
            this.tabList.splice(index, 1)
        },
    },

})


export const tabsCounterStoreWithOut = () => {
    return tabsCounterStore(store)
}