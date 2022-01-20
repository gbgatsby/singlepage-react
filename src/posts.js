import * as React from 'react'
import { 
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Edit,
    Create,
    Filter
} from 'react-admin'

const PostTitle = ({ record }) => {
    return <span>Post {record ?'"${record.title}"' : ""} </span>;
}

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
)

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="id" reference="posts">
                <TextField source="author" />
                </ReferenceField>
            <TextField source="name" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <textInput disable source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
)

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="id" reference="posts">
                <TextInput source="name" />
            </ReferenceInput>
            <TextInput source="name"/>
            <TextInput source="title" />
            <TextInput source="author" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
)