import {Tank, UltraTank, AccurateTank} from './modules/tanks'

class FightArea {
  private size: number = 10
  private tanks: object[] = []  
  constructor(tanks: object[]) {
    this.tanks = tanks
  }

  info() {
    console.log(JSON.stringify(this.tanks))
  }
}