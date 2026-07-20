import { RecommendItem } from "./type";

export const recommendItems: RecommendItem[] = [
  {
    name: "모자",
    itemImage: "/image/checklist/cap.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty === "0") {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "선크림",
    itemImage: "/image/checklist/sunscreen.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty === "0") {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "선글라스",
    itemImage: "/image/checklist/sunglasses.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty === "0") {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "물",
    itemImage: "/image/checklist/water.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty === "0") {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "얼음물",
    itemImage: "/image/checklist/icewater.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty === "0") {
        score += 5;
      }
      if (data.current.feelsLike > 23) {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "휴대용 선풍기",
    itemImage: "/image/checklist/fan.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty === "0") {
        score += 5;
      }
      if (data.current.feelsLike > 23) {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "우산",
    itemImage: "/image/checklist/umbrella.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty !== "0") {
        score += 5;
      }
      if (data.current.rainAmount !== 0) {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "우비",
    itemImage: "/image/checklist/raincoat.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty !== "0") {
        score += 5;
      }
      if (data.current.rainAmount !== 0) {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "타월",
    itemImage: "/image/checklist/towel.png",
    score: (data) => {
      let score = 0;
      if (data.current.pty !== "0") {
        score += 5;
      }
      return score;
    },
  },
  {
    name: "겉옷",
    itemImage: "/image/checklist/outer.png",
    score: (data) => {
      let score = 0;
      if (data.current.feelsLike < 20) {
        score += 15;
      }
      return score;
    },
  },
  {
    name: "목도리",
    itemImage: "/image/checklist/muffler.png",
    score: (data) => {
      let score = 0;
      if (data.current.feelsLike < 5) {
        score += 15;
      }
      if (data.current.windSpeed > 4) {
        score += 15;
      }
      return score;
    },
  },
  {
    name: "핫팩",
    itemImage: "/image/checklist/hotpack.png",
    score: (data) => {
      let score = 0;
      if (data.current.feelsLike < 5) {
        score += 15;
      }
      return score;
    },
  },
  {
    name: "패딩",
    itemImage: "/image/checklist/paddingjacket.png",
    score: (data) => {
      let score = 0;
      if (data.current.feelsLike < 0) {
        score += 15;
      }
      return score;
    },
  },
];
