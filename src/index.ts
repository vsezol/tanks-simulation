import { Tank, UltraTank, AccurateTank } from './modules/tanks'

class FightArea {
  // private size: number = 10
  private blueTanks: any[]
  private greenTanks: any[]
  constructor(blueTanks: any[], greenTanks: any[]) {
    this.blueTanks = blueTanks
    this.greenTanks = greenTanks
  }

  info() {
    console.log(`BLUE: ${this.blueTanks.length}`)
    this.blueTanks.forEach(tank => {
      const [id, type, hp] = tank.getParams()
      console.log(`id: ${id} type: ${type} HP: ${hp}`)
    })
    console.log(`\nGREEN: ${this.greenTanks.length}`)
    this.greenTanks.forEach(tank => {
      const [id, type, hp] = tank.getParams()
      console.log(`id: ${id} type: ${type} HP: ${hp}`)
    })
  }

  playIneTick(tick: number): void{
    this.blueTanks.forEach((btank, index) => {
      if (tick % btank.getFireTemp() == 0) {
        const attackIndex = Math.round(Math.random() * (this.greenTanks.length - 1))
        this.greenTanks[attackIndex].takeDamage(btank.getDamage())
      }
    })
    this.greenTanks.forEach((gtank, index) => {
      if (tick % gtank.getFireTemp() == 0) {
        const attackIndex = Math.round(Math.random() * (this.greenTanks.length - 1))
        const [gx, gy] = gtank.getCords()
        const btank = this.blueTanks[attackIndex]
        const [bx, by] = btank.getCords()
        console.log(gx, gy, bx, by)
        // takeDamage(gtank.getDamage())
      }
    })
  }
}

const fightArea = new FightArea(
  [
    new Tank(0, 0, 'blue'),
    new UltraTank(1, 0, 'blue'),
    new AccurateTank(2, 0, 'blue'),
    new UltraTank(3, 0, 'blue'),
    new AccurateTank(4, 0, 'blue'),
    new Tank(5, 0, 'blue'),
    new Tank(6, 0, 'blue'),
    new AccurateTank(7, 0, 'blue'),
    new Tank(8, 0, 'blue'),
    new UltraTank(9, 0, 'blue')
  ],
  [
    new Tank(0, 9, 'green'),
    new UltraTank(1, 9, 'green'),
    new AccurateTank(2, 9, 'green'),
    new UltraTank(3, 9, 'green'),
    new UltraTank(4, 9, 'green'),
    new UltraTank(5, 9, 'green'),
    new UltraTank(6, 9, 'green'),
    new AccurateTank(7, 9, 'green'),
    new AccurateTank(8, 9, 'green'),
    new AccurateTank(9, 9, 'green')
  ]
)

let tick = 0
setInterval(() => {
  console.clear()
  fightArea.playIneTick(tick)
  fightArea.info()
  tick++
}, 1000)
