import React from 'react'
import { Tabs } from 'antd';
import AdminPosterManageTab from '../Components/AdminPageComponent/AdminPosterManagement/AdminPosterManageTab';
import AdminOwnderAccountManageTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminOwnderAccountManageTab';
import AdminStatisticTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminStatisticTabs';
import AdminLogin from '../Components/LoginModal/AdminLogin/AdminLogin';
import AdminForm from '../Components/LoginModal/AdminLogin/AdminForm';
import AdminHeroContent from "../Components/HeroSection/AdminHeroContent/AdminHeroContent";
import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar";
import AdminCommentManageTable from '../Components/AdminPageComponent/AdminCommentManageTab/AdminCommentManageTable';
import { Link } from 'react-router-dom'
import ChatIcon from '../Asset/Icon/chat_room.svg';
import NotificationBubble from "../Components/NotificationBubble/NotificationBubble";
import AdminReportManageTable from '../Components/AdminPageComponent/AdminReportManageTab/AdminReportManageTable';
import { useDispatch } from 'react-redux'
import { openPosterCreator } from '../Store/ActionCreator/showPosterCreatorActionCreator'
import { useSelector } from 'react-redux'
import PosterCreator from '../Components/PosterCreator/PosterCreator'
const { TabPane } = Tabs;

function Admin() {
    const heroImage = "https://bom.to/8z2EoSXh";

    const dispatch = useDispatch()
    const isShowPosterCreatorReducer = useSelector(state => state.isShowPosterCreatorReducer)

    const showPosterCreatorPopup = () => {
        dispatch(openPosterCreator())
    }

    return (
        <div style={{ position: "relative" }}>
            {!sessionStorage.getItem('adminToken') && <AdminLogin>
                <AdminForm />
            </AdminLogin>}
            <Navbar />
            <HeroSection heroImage={heroImage}>
                <AdminHeroContent/>
            </HeroSection>
            <NotificationBubble type="admin" />
            <Link to={"/chat/admin"} target="_blank">
                <div className="fixed-bubble">
                    <img src={ChatIcon} alt="chat-icon" />
                </div>
            </Link>
            <div className="tab-container">
                <Tabs tabPosition="top">
                    <TabPane tab="Quản lý bài đăng" key="1">
                        <AdminPosterManageTab />
                    </TabPane>
                    <TabPane tab="Quản lí bình luận" key="2">
                        <AdminCommentManageTable />
                    </TabPane>
                    <TabPane tab="Quản lí báo cáo" key="3">
                        <AdminReportManageTable />
                    </TabPane>
                    <TabPane tab="Quản lý tài khoản chủ nhà trọ" key="4">
                        <AdminOwnderAccountManageTab />
                    </TabPane>
                    <TabPane tab="Phân tích và thống kê" key="5">
                        <AdminStatisticTab />
                    </TabPane>
                </Tabs>
            </div>
            {isShowPosterCreatorReducer && <PosterCreator type="admin" />}
        </div>
    )
}

export default Admin
