import ATank from './abstractTank'

// standart tank with default params
export class Tank extends ATank {
  protected tankType: string = 'Standart'
  protected type: string
  protected id: string
  protected damage: number = 100
  protected rotateAngle: number = 360
  protected missСhance: number = 0.25
  protected fireTemp: number = 1
  protected hp: number = 200
  protected y: number
  protected x: number
  protected canChangeY: boolean

  constructor(y: number, x: number, type: string) {
    super()
    this.y = y
    this.x = x
    this.type = type
    this.id = x + type + y
    this.canChangeY = Math.random() > 0.5 ? true : false
  }

  // check missing
  isMissing = (dist: number): boolean =>
    Math.random() < this.missСhance + dist / 25

  // check dead
  isDead = (): boolean => this.hp <= 0

  // run
  run = (): void => {
    if (this.type === 'blue') {
      this.x++
      if (this.x > 9) this.x = 9
    } else {
      this.x--
      if (this.x < 0) this.x = 0
    }
  }

  // change line
  changeY = (): boolean => {
    if (this.canChangeY) {
      if (Math.random() > 0.5) {
        this.y > 0 ? this.y-- : this.y++
      } else {
        this.y < 9 ? this.y++ : this.y--
      }
      return true
    } else {
      this.hp = 0
      return false
    }
  }

  getDamage = (): number => this.damage

  getFireTemp = (): number => this.fireTemp

  getType = (): string => this.type

  getId = (): string => this.id

  takeDamage = (dmg: number): void => {
    this.hp -= dmg
  }

  getParams = (): any[] => [this.id, this.tankType, this.hp]

  getCords = (): [number, number] => [this.x, this.y]
}

// tank with ultra gun
export class UltraTank extends Tank {
  protected tankType: string = 'Ultra'
  protected damage: number = 200
  protected rotateAngle: number = 180
  protected missСhance: number = 0.5
  protected fireTemp: number = 2
  protected hp: number = 300
  constructor(y: number, x: number, type: string) {
    super(y, x, type)
  }
}

// tank with accurate gun
export class AccurateTank extends Tank {
  protected tankType: string = 'Accurate'
  protected damage: number = 50
  protected rotateAngle: number = 90
  protected missСhance: number = 0.1
  protected fireTemp: number = 1
  protected hp: number = 150
  constructor(y: number, x: number, type: string) {
    super(y, x, type)
  }
}
