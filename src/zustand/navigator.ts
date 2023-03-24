import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface INavigator {
  active: string
  setActive: (v: string) => void
  getActive: () => string
}

export const useNavigator = create<INavigator>()(
  persist(
    (set, get) => ({
      active: 'home',
      getActive: () => get().active,
      setActive: (value) => set({ active: value }),
      resetActive: () => set({ active: 'home' })
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)