import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
export function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
export const items = [

    getItem('Dashboard ', '1', <PieChartOutlined />),
    getItem('Settings', '2', <DesktopOutlined />),

    getItem('Deals', 'sub1', <MailOutlined />, [
        getItem('Add product', '3'),
        getItem('View Product', '4'),
    ]),

    getItem('Spices', 'sub2', <ContainerOutlined />,[
        getItem('Add Spices', '5'),
        getItem('view Spices', '6'),
    ]),
    getItem('Manage Recipes', 'sub3', <ContainerOutlined />,[
    getItem('Add Recipes', '7'),
        getItem('view Recipes', '8'),]),


    // getItem('World Cusines', 'sub2', <AppstoreOutlined />, [
    //     getItem('Cusines', '12'),
    //     getItem('Add product', '9'),
    //     getItem('Manage Product', '10'),
    // ]),

    // getItem('Our Range', 'sub3', <MailOutlined />, [
    //     getItem('Add product', '11'),
    //     getItem('Manage Product', '12'),
    // ]),

    // getItem('Orders', '13', <ContainerOutlined />),
    // getItem('Sales', '14', <ContainerOutlined />),

    // getItem('Purchase', 'sub3', <MailOutlined />, [
    //     getItem('Add Purchase', '15'),
    //     getItem('Manage Purchase', '16'),
    // ]),

    // getItem('Expences', 'sub4', <MailOutlined />, [
    //     getItem('Add Expences', '17'),
    //     getItem('Manage Expences', '18'),
    // ]),

    // getItem('Stock', '19', <ContainerOutlined />),
    // getItem('Stock report', '20', <ContainerOutlined />),
    // getItem('Profit & Loss', '21', <ContainerOutlined />),


];