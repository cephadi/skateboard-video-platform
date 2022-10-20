import Avatar2 from '../assets/img/avatar-2.png'
import Avatar3 from '../assets/img/avatar-3.png'
import Avatar4 from '../assets/img/avatar-4.png'
import Avatar6 from '../assets/img/avatar-6.png'
import Avatar7 from '../assets/img/avatar-7.png'
import Avatar8 from '../assets/img/avatar-8.png'

import Bg1 from '../assets/img/bg-1.png'
import Bg2 from '../assets/img/bg-2.png'
import Bg3 from '../assets/img/bg-3.png'
import Bg4 from '../assets/img/bg-4.png'
import Bg6 from '../assets/img/bg-6.png'
import Bg7 from '../assets/img/bg-7.png'

import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";
import { ReactComponent as PaperDownloadIcon } from "../assets/icons/paper-download.svg";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";
import { ReactComponent as CheckTealIcon } from "../assets/icons/check-teal.svg";
import { ReactComponent as CheckOrangeIcon } from "../assets/icons/check-orange.svg";

export const primaryCard = [
	{
		title: "How to do Basic Jumping and how to landing safely",
		avatar: Avatar3,
		background: Bg1,
		name: "Thomas Hope",
		views: "53K views",
		created_at: "2 weeks ago",
		check_icon: CheckTealIcon,
		duration: "7 min",
	},
	{
		title: "Skateboard Tips You need to know",
		avatar: Avatar2,
		background: Bg2,
		name: "Tony Andrew",
		views: "52K views",
		created_at: "1 weeks ago",
		check_icon: CheckOrangeIcon,
		duration: "10 min",
	},
]

export const secondaryCard = [
	{
		title: "Basic how to ride your skateboard comfortly",
		avatar: Avatar6,
		background: Bg3,
		name: "Andy William",
		views: "53K views",
		created_at: "2 weeks ago",
		color: "green",
		duration: "7 min",
	},
	{
		title: "Prepare for your first skateboard jump",
		avatar: Avatar4,
		background: Bg7,
		name: "Johny Wise",
		views: "53K views",
		created_at: "2 weeks ago",
		color: "orange",
		duration: "7 min",
	},
	{
		title: "Tips to playing skateboard on the ramp",
		avatar: Avatar8,
		background: Bg6,
		name: "Budi Hakim",
		views: "53K views",
		created_at: "2 weeks ago",
		color: "orange",
		duration: "7 min",
	},
	{
		title: "Basic Equipment to play skateboard safely",
		avatar: Avatar7,
		background: Bg4,
		name: "Wijaya Abadi",
		views: "53K views",
		created_at: "2 weeks ago",
		color: "green",
		duration: "7 min",
	},
]

export const sidebarMenu = [
	{
		label: "Menu",
		children: [
			{ name: "Discover", Icon: HomeIcon },
			{ name: "Trending", Icon: ArrowRightIcon },
			{ name: "Streaming", Icon: DownloadIcon },
			{ name: "Playlist", Icon: PaperDownloadIcon },
			{ name: "Bookmark", Icon: WalletIcon },
		],
	},
	{
		label: "Category",
		children: [
			{ name: "Live Stream", Icon: HomeIcon },
			{ name: "Tutorial", Icon: ArrowRightIcon },
			{ name: "Competition", Icon: DownloadIcon },
			{ name: "Community", Icon: PaperDownloadIcon },
		],
	},
]