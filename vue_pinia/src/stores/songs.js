import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const mySongs = reactive([])
  function addSong (list, song) {
    list.push(song)
  }
  function clearSongs (list) {
    list.length = 0
    // console.log(list)
  }

  return { mySongs, addSong, clearSongs }
})