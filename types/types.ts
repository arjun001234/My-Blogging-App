import { Date } from "mongoose";
import { NextApiRequest } from "next";
import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode
}

export interface SideBarProps {
}

export interface contextType {
    showNavBar: boolean,
    handleOpenNavBar: () => void,
    handleCloseNavBar: () => void;
    showDetails: boolean,
    handleShowDetails: () => void,
    handleHideDetails: () => void
}

export interface contextPropTypes{
    children: ReactNode
}

export interface headerProps{
    title: string
}

export interface postHeaderProps {
    title: string,
    image: string
}

export interface fileResType {
    title: string,
    date: string,
    image: string,
    desc: string,
    isFeatured: boolean,
}
export interface postDataType extends fileResType{
    slug: string,
    content: string
}

export interface HomePageProps {
    data: postDataType[];
}

export interface PostContainerProps extends HomePageProps {}

export interface PostContentProps {
    data: postDataType
}

export interface AllPostsProps extends HomePageProps {};

export interface staticPathsType {
    params: {
        slug: string[]
    }
}

export interface SinglePostProps extends PostContentProps {};

export interface PostDetailsProps extends SinglePostProps {};

export interface PostDetailsContentProps extends SinglePostProps {};

export interface FormInput {
    name: {
        value: string
    },
    email: {
        value: string
    }
    comment: {
        value: string
    }
}

export interface ContactRequestData {
    name: string,
    email: string,
    comment: string
}

export interface ContactApiReqType extends NextApiRequest {
    body: ContactRequestData
}

export interface ContactSchemaType extends ContactRequestData {
    date: Date
}

export type ReqStatusType = 'Error' | 'Pending' | 'Success';

export interface NotificationProps {
    message: string,
    status: ReqStatusType
}