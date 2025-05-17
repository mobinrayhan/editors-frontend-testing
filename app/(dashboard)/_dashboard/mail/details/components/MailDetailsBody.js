// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Image } from "react-bootstrap";

// import widget/custom components
import { GKTippy } from "widgets";

// import sub components
import { Avatar } from "components/bootstrap/Avatar";

// import MDI icons
import { mdiAttachment, mdiReplyOutline, mdiStarOutline } from "@mdi/js";
import Icon from "@mdi/react";

const MailDetailsBody = () => {
  return (
    <Fragment>
      <div className="d-xl-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center mb-3 mb-xl-0">
          <div>
            <Avatar
              size="md"
              src="/images/avatar/avatar-1.jpg"
              type="image"
              className="rounded-circle"
            />
          </div>
          <div className="ms-3 lh-1">
            <h5 className="mb-1">Contact For &quot;Website Design&quot;</h5>
            <p className="mb-0 fs-6">Codescandy hello@example.com</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <small className="text-muted">
              Apr 22, 2022, 12:40 AM (1 day ago)
            </small>
          </div>
          <div className="ms-2">
            <GKTippy content="Star">
              <Link href="#">
                <Icon
                  path={mdiStarOutline}
                  className="text-muted me-2"
                  size={0.7}
                />
              </Link>
            </GKTippy>
            <GKTippy content="Reply">
              <Link href="#">
                <Icon
                  path={mdiReplyOutline}
                  className="text-muted me-2"
                  size={0.7}
                />
              </Link>
            </GKTippy>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="mb-3 text-dark">Hello Lesile Alexander,</p>
        <p>
          Ullamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum
          sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco
          magna. Lorem consectetur est dolor minim exercitation deserunt quis
          duis fugiat ipsum incididunt non.{" "}
          <span className="text-dark">Anim aute ipsum cupidatat</span>nisi
          occaecat quis sit nisi labore labore dolore do. Pariatur veniam culpa
          quis veniam nisi exercitation veniam ut.{" "}
        </p>
        <p>
          Quis do sint proident fugiat ad. Nunc at magna vitae dolor maximus
          placerat. Nam quis arcu sodales, eleifend ex vitae, pellentesque
          ligula. Nunc ut tristique{" "}
          <Link href="#">nisi, id ullamcorper justo.</Link>
        </p>
        <p>
          The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc.Quisque imperdiet
          mauris turpis, sed malesuada metus elementum dictum. Vestibulum
          hendrerit malesuada elementum.{" "}
        </p>
        <p className="mb-0">
          Proin elementum, sem in ornare sodales, dui purus lobortis mi, ut
          iaculis lacus enim in dolor. In velit sapien, dignissim accumsan nibh
          eu, eleifend luctus metus. Quisque egestas nisl in enim hendrerit, at
          vestibulum turpis tincidunt.
        </p>
        <div className="mt-6">
          <p className="mb-0">Cheers!</p>
          <p className="text-dark font-weight-bold mb-0">
            Leslie Alexander
          </p>{" "}
        </div>
        <div className="border-top py-4 mt-6">
          <p>
            <Icon
              path={mdiAttachment}
              className="me-2 align-middle"
              size={0.7}
            />{" "}
            2 Attachments
          </p>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <Image
                src="/images/background/profile-bg.jpg"
                alt=""
                width="36"
                height="36"
                className="rounded"
              />
              <div className="ms-2">
                <p className="mb-0 fs-6">image-thumbnail.jpg</p>
                <p className="fs-6 mb-0">15.54 KB</p>
              </div>
            </div>
            <div className="d-flex align-items-center ms-6">
              <div className="icon-shape icon-md bg-danger text-white rounded">
                <small>PDF</small>
              </div>
              <div className="ms-2">
                <p className="mb-0 fs-6">pdf-thumbnail.jpg</p>
                <p className="fs-6 mb-0">243.45 KB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MailDetailsBody;
