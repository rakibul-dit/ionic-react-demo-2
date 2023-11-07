import { useState } from "react";
// import classNames from "classnames";
import Link from "next/link";
// import Drawer from "@material-ui/core/Drawer";
import Drawer from "@mui/material/Drawer";

export default function MobileNav(props) {
	const [expandTafseer, setExpandTafseer] = useState(false);
	const handleClickTafseer = () => {
		setExpandTafseer(!expandTafseer);
	};

	return (
		<Drawer
			anchor="left"
			open={props.navOpen}
			onClose={props.navControl(false)}
			className="mobile-menu-root">
			<div className="mobile-menu">
				<div className="m-menu-wrap">
					<div className="m-menu-ctn">
						<div className="m-menu-top">
							<div
								className="m-menu-close"
								onClick={(e) => props.navControl(false)(e)}>
								<span></span>
								<span></span>
							</div>
						</div>

						<ul className="m-menu">
							<li>
								<Link href="/" onClick={(e) => props.navControl(false)(e)}>
									Home
								</Link>
							</li>
							{/* <li>
								<Link href={`/lectures/${youtube.uploadPlaylistID}`}>
									<a onClick={(e) => props.navControl(false)(e)}>
										<VideoLibraryIcon />
										সকল ভিডিও
									</a>
								</Link>
							</li> */}

							<li>
								<Link
									href="/list/all"
									onClick={(e) => props.navControl(false)(e)}>
									Lists
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Drawer>
	);
}
