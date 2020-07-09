import { Form, Input, Button, Radio } from 'antd';

export default function AutoFindPanel() {
  return (
		<div className="autofindpanel">
			<Form
      >
				<Form.Item label="Название">
          <Input placeholder="Название" />
        </Form.Item>
        <Form.Item label="Год">
          <Input placeholder="Год" />
        </Form.Item>
        <Form.Item label="Цена">
          <Input placeholder="Цена" />
        </Form.Item>
        <Form.Item >
          <Button type="primary">Submit</Button>
        </Form.Item>
			</Form>
		</div>
  )
}