import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import PosterCreator from "../Components/PosterCreator/PosterCreator";
import StatisticTable from "../Components/StatisticTable/StatisticTable";
import RoomDetailDrawer from "../Components/RoomDetailDrawer/RoomDetailDrawer";
import HeroSection from "../Components/HeroSection/HeroSection";
import OwnerHeroContent from "../Components/OwnerHeroContent/OwnerHeroContent";

export default function Owner() {

    const ownerHeroImage = "https://bom.to/O9fh378N";

    const data = [
        {
            searchingKeyWord: [],
            images: [],
            postedDate: "2020-12-16T13:24:45.378Z",
            status: "available",
            availableDate: [],
            isApproved: false,
            _id: "5fda10c3b4da690d101de80f",
            avaliableDate: [
                "2020-12-03T13:45:53.579Z",
                "2020-12-18T13:45:53.579Z"
            ],
            title: "18020877 vxvx",
            city: "Phòng trọ",
            district: "Phòng trọ",
            subDistrict: "Phòng trọ",
            address: "erwrewew",
            typeOfAccommodation: "chung cư mini",
            numberOfRoom: 12313,
            pricePerMonth: 12,
            pricePerQuarter: null,
            pricePerYear: null,
            area: 1132132,
            description: "Tiếng Việt (chữ Nôm: 㗂tiếng越Việt), cũng gọi là tiếng Việt Nam (㗂越南),[5] tiếng Kinh (㗂京) hay Việt ngữ (越語) là ngôn ngữ của người Việt và là ngôn ngữ chính thức tại Việt Nam. Đây là tiếng mẹ đẻ của khoảng 85% dân cư Việt Nam cùng với hơn 4 triệu Việt kiều. Tiếng Việt còn là ngôn ngữ thứ hai của các dân tộc thiểu số tại Việt Nam và là ngôn ngữ dân tộc thiểu số tại Cộng hòa Séc.\n\nHiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam 2013, tại Chương I Điều 5 Mục 3, ghi tiếng Việt là ngôn ngữ quốc gia của Việt Nam.[6] Hiện chưa có bất kỳ văn bản nào ở cấp nhà nước quy định giọng chuẩn và quốc tự của tiếng Việt.[7] Phần lớn các văn bản tiếng Việt ở Việt Nam được viết theo \"Quy định về chính tả tiếng Việt và về thuật ngữ tiếng Việt\" áp dụng cho các sách giáo khoa, báo và văn bản của ngành giáo dục nêu tại Quyết định của Bộ Giáo dục số 240/QĐ ngày 5 tháng 3 năm 1984[8] do những người thụ hưởng giáo dục đó sau này ra làm việc trong mọi lĩnh vực xã hội hướng tới việc chuẩn hóa chính tả tiếng Việt.\n\nDù tiếng Việt có lượng lớn từ vựng chuyển hoá từ tiếng Hán thành âm Hán Việt và từ Hán Việt nhưng dựa trên ngữ pháp và vốn từ căn bản, ngôn ngữ này thuộc ngữ hệ Nam Á và có số người nói nhiều nhất (nhiều hơn 1 số lần so với các ngôn ngữ khác cùng hệ cộng lại). Hiện tại ở Việt Nam, tiếng Việt chủ yếu sử dụng chữ Quốc ngữ (chữ Latinh) để viết, còn chữ Hán và chữ Nôm biểu ý được dùng chủ yếu bởi cộng đồng người Kinh ở Trung Quốc.[9] Tại Việt Nam chữ Hán và chữ Nôm được sử dụng ít hơn, thường trong các hoạt động liên quan tới văn hóa truyền thống như viết thư pháp, viết sớ hay dựng câu đối.\n\nTránh nhầm lẫn với Việt ngữ (粵語) hay tiếng Quảng Đông sử dụng ở miền nam Trung Quốc (Quảng Đông, Quảng Tây) cũng như ở Hồng Kông và Ma Cao.\n\nTổ chức tiêu chuẩn hóa quốc tế đặt mã ngôn ngữ hai chữ cái cho tiếng Việt là \"vi\" (tiêu chuẩn ISO 639-1) và đặt mã ngôn ngữ ba chữ cái cho tiếng Việt là \"vie\" (tiêu chuẩn ISO 639-2).[10][11][12]",
            ownerId: "5fda10c3b4da690d101de80e",
            name: "Rye",
            rating: {
                rate: 5,
                likedUser: [
                    "5fd827c26c982835a08b9487"
                ],
                visits: [],
                _id: "5fda10c3b4da690d101de80e",
                ratedTime: [
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Tốt"
                    }
                ],
                __v: 23
            },
            materialFacilities: {
                other: [],
                _id: "5fda10c3b4da690d101de80d",
                bathroom: "close",
                electricWaterHeater: true,
                kitchen: "closed",
                airConditioner: true,
                balcony: true,
                bed: true,
                fridge: true,
                washingMachine: true,
                wardrobe: true,
                electricityPrice: 1300,
                domesticWaterPrice: 5000,
                __v: 0
            },
            __v: 0
        }
    ]

    const tableData = data.map(post => {
        return {
            ...post,
            rating: {},
            rate: post.rating.rate,
            visited: post.rating.visits.length,
            likes: post.rating.likedUser.length,
            detail: <RoomDetailDrawer data={post}/>
        }
    })

    return (
        <div className="owner-page-container">
            <Navbar/>
            <PosterCreator/>
            <HeroSection heroImage={ownerHeroImage}>
                <OwnerHeroContent data={data}/>
            </HeroSection>
            <StatisticTable data={data}/>
        </div>
    )
}