import { Tank, UltraTank, AccurateTank } from './tanks/tanks'

class FightArea {
  private blueTanks: any[]
  private greenTanks: any[]
  constructor(blueTanks: any[], greenTanks: any[]) {
    this.blueTanks = blueTanks
    this.greenTanks = greenTanks
  }

  // get vector length
  static getVectLen = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))

  // information about fight
  public info = (): void => {
    console.log(`\nBLUE: ${this.blueTanks.length}`)
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

  // somebody attack somebody
  private attackTarget = (attackers: any[], targets: any[]): void => {
    attackers.forEach(attacker => {
      if (tick % attacker.getFireTemp() == 0) {
        const attackIndex = Math.round(Math.random() * (targets.length - 1))
        const [ax, ay] = attacker.getCords()
        const target = targets[attackIndex]
        if (target !== undefined && attacker !== undefined) {
          const [tx, ty] = target.getCords()
          const distance = FightArea.getVectLen(tx, ty, ax, ay)
          if (!target.isMissing(distance)) {
            target.takeDamage(attacker.getDamage())
            console.log(`${attacker.getId()} => ${target.getId()}`)
          } else {
            console.log(`${attacker.getId()} X ${target.getId()}`)
          }
        }
      }
    })
  }

  // filter dead tanks
  private filterTanks = (): void => {
    this.blueTanks = this.blueTanks.filter(btank => !btank.isDead())
    this.greenTanks = this.greenTanks.filter(gtank => !gtank.isDead())
  }

  // checking winner
  public checkWin = (): string => {
    if (this.blueTanks.length <= 0) {
      return 'green'
    } else if (this.greenTanks.length <= 0) {
      return 'blue'
    } else {
      return 'nobody'
    }
  }

  // move all tanks
  private moveTanks = (tanks: any[]): void => {
    tanks.forEach(tank => tank.run())
  }

  // main func to control fight
  public playIneTick(tick: number): void {
    this.filterTanks()
    console.log('\nBLUE => GREEN\n')
    this.attackTarget(this.blueTanks, this.greenTanks)
    console.log('\nGREEN => BLUE\n')
    this.attackTarget(this.greenTanks, this.blueTanks)
    this.moveTanks(this.blueTanks)
    this.moveTanks(this.greenTanks)
  }
}

// generate tanks
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

// fight loop
let tick = 0
const gameInterval = setInterval(() => {
  console.clear()
  const winner = fightArea.checkWin()
  if (winner !== 'nobody') {
    console.clear()
    for (let i = 0; i <= 10; i++) {
      console.log('WINNER is', winner)
    }
    clearInterval(gameInterval)
  }
  fightArea.playIneTick(tick)
  fightArea.info()
  tick++
}, 100)
