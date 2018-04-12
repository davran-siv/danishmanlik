module Game {
  interface ICell {
    allowTop: boolean
    allowRight: boolean
    allowBottom: boolean
    allowLeft: boolean
    owner: number | null
  }
  
  interface IUser {
    id: number
    userName: string
  }
  
  interface IGame {
    Board: ICell[]
    FirstPlayer: IUser
    SecondPLayer: IUser
    isFirstPlayerTurn: boolean
    
  }
  
  interface IDice {
  
  }
  
  
  class User implements IUser{
    id: number
    userName: string

    constructor(userName: string) {
      this.userName = userName
    }
  }
  
  
  //
  // class Board implements Cell{
  //
  //
  //   constructor(props: { height: number, width: number, firstPlayer: User, secondPlayer: User }) {
  //     this.createBoard(props)
  //   }
  //
  //   createBoard = (props: any) => {
  //     console.log('Board created')
  //   }
  // }
  //
  // class Dice {
  //   result: number
  //   min: number = 1
  //   max: number = 9
  //
  //   constructor() {
  //   }
  //
  //   throwDice = () => {
  //     return this.throwOneDice() + this.throwOneDice()
  //   }
  //
  //   throwOneDice = () => {
  //     return 1
  //   }
  // }
}


