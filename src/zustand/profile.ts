import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// for prod
// interface Profile {
//   name: string,
//   data: object,
//   isAuth: boolean,
//   auth: object
// }

// current
interface IProfile {
  name: string
  data: object
  isAuth: boolean
  auth: object | null
}

interface IProfileStore {
  profile: IProfile | null
  setProfile: (v: IProfile) => void,
  clearProfile: () => void
}

export const useProfile = create<IProfileStore>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (value) => set({ profile: value }),
      clearProfile: () => set({ profile: null })
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)