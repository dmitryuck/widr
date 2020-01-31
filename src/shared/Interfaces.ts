export interface Action {
  type: string;
  payload?: any;
}

export interface CallMember {
  name: string;
  photo: string;
}