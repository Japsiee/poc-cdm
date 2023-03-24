export interface INavigatorLink {
  title: string
  type: TypeButton | TypeLink
  name: 'account-settings' | 'home' | 'logout'
  metadata?: any
  icon: JSX.Element
  isActive?: boolean
};

type TypeButton = 'button'
type TypeLink = 'link'