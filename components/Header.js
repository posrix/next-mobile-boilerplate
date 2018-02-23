import { NavBar, Icon } from 'antd-mobile'

export default class Header extends React.Component {
  render() {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        Title
      </NavBar>
    )
  }
}
