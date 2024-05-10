// import css
// import libraries
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
// import components
import SampleNav from "../../components/custom/sample-nav/sample-nav";

// Variable declarations
const { Content } = Layout;

// Component definition
export default function MainLayout() {
    // State variables
    // Hooks
    // Event handlers
    // Helper functions
    // Return statement
    return(
        <>
            <Layout>
                <SampleNav/>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </>
    )
}




