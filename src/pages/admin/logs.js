import React from "react"

import { Link } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AdminLogsPage = () => (
  <Layout>
    <SEO title="Admin" />
    <h1>Logs</h1>

    <div>Logs go here</div>

    <Link to="/admin">Dash</Link>
    <Link to="/admin/users">Logs</Link>
  </Layout>
)

export default AdminLogsPage
