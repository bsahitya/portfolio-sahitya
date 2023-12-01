interface SanityObject {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface SanityImage {
  asset: { _ref: string; _type: string };
  _type: string;
}

export interface AboutEntity extends SanityObject {
  title: string;
  imgUrl: string;
  description: string;
}

export interface Skill extends SanityObject {
  name: string;
  icon: SanityImage;
  bgColor: string;
}

export interface Work {
  company: string;
  desc: string;
  name: string;
  _key: string;
  _type: string;
}

export interface Experience extends SanityObject {
  works: Work[];
  year: number;
}
