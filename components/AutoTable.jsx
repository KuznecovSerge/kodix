import { Table, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Home() {
    return (
        <Table 
        // columns={columns} dataSource={entities} rowKey="id"
        className="auto-table__table"
        size="small" 
        pagination={false}
        // scroll={{ y: 300 }}
        // summary={summary}
    />
    )
}