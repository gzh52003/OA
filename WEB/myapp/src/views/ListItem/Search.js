import React from 'react'
import {Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

<Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
