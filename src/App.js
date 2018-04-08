import React, { Component } from "react";

import Header from "./components/header.js";
import ArtCard from "./components/artcard.js";
import Modal from "./components/modal.js";

import girlHeadCloudPic from "./static/images/cards/girl_head_cloud.jpg";
import goatPic from "./static/images/cards/goat.jpg";
import threePic from "./static/images/cards/hero.jpg";

const bs = e => console.log(`clicked: ${e.target.innerHTML}`);

class App extends Component {
  artList = {
    cloud: {
      src: girlHeadCloudPic,
      title: "girl with head in cloud",
      onClick: () => this.handleImageClick("cloud"),
      icons: [{ text: "$", onClick: bs }, { text: "f", onClick: bs }]
    },
    goat: {
      src: goatPic,
      title: "goat pic",
      onClick: () => this.handleImageClick("goat"),
      icons: [{ text: "$", onClick: bs }, { text: "f", onClick: bs }]
    },
    three: {
      src: threePic,
      title: "three little pics bruh",
      onClick: () => this.handleImageClick("three"),
      icons: [{ text: "$", onClick: bs }, { text: "f", onClick: bs }]
    }
  };

  navLinks = [
    {
      text: "gallery",
      color: "hover-bg-lightest-blue",
      active: true
    },
    {
      onClick: e => console.log("clicked", e),
      text: "about",
      color: "hover-bg-light-green"
    },
    {
      onClick: e => console.log("clicked", e),
      text: "blog",
      color: "hover-bg-light-blue"
    },
    {
      onClick: e => console.log("clicked", e),
      text: "other",
      color: "hover-bg-light-pink"
    },
    {
      onClick: e => console.log("clicked", e),
      text: "stuff",
      color: "hover-bg-light-yellow"
    }
  ];

  constructor() {
    super();
    this.state = {
      modalVisible: false,
      modalData: {}
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleToggleModalVisible = this.handleToggleModalVisible.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.renderModalChildImage = this.renderModalChildImage.bind(this);
  }

  handleImageClick(imageKey) {
    this.setState(s => ({
      ...s,
      modalVisible: true,
      modalTransparent: true,
      modalChildren: () => this.renderModalChildImage(imageKey)
    }));
  }

  handleToggleModalVisible() {
    this.setState(s => ({ ...s, modalVisible: !s.modalVisible }));
  }

  renderModal() {
    let { modalChildren, modalTransparent } = this.state;

    return (
      <Modal
        handleClose={this.handleToggleModalVisible}
        transparent={modalTransparent}
      >
        {modalChildren()}
      </Modal>
    );
  }

  renderModalChildImage(imageKey) {
    let image = this.artList[imageKey];
    return <img src={image.src} alt={image.title} />;
  }

  render() {
    return (
      <div className="">
        <Header links={this.navLinks} />
        <div className="flex flex-wrap justify-center ph2">
          {Object.keys(this.artList).map(k => (
            <ArtCard
              {...this.artList[k]}
              key={`art-card-${this.artList[k].title}`}
            />
          ))}
        </div>
        {this.state.modalVisible && this.renderModal()}
      </div>
    );
  }
}

export default App;
