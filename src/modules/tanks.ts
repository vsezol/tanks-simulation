abstract class ATank {
  protected abstract type: string
  protected abstract damage: number
  // protected abstract rotateAngle: number
  protected abstract missСhance: number
  protected abstract fireTemp: number
  protected abstract hp: number
  protected abstract x: number
  protected abstract y: number
  protected abstract canChangeY: boolean

  abstract isMissing(dist: number): boolean
  abstract run(): void
  abstract isDead(): boolean
  abstract changeY(): boolean
  abstract getDamage(): number
  abstract getType(): string
}

export class Tank extends ATank {
  protected type: string
  protected damage: number = 100
  // protected rotateAngle: number = 360
  protected missСhance: number = 0.25
  protected fireTemp: number = 1
  protected hp: number = 200
  protected y: number
  protected x: number = 0
  protected canChangeY: boolean

  constructor(y: number, type: string) {
    super()
    this.y = y
    this.type = type
    this.canChangeY = Math.random() > 0.5 ? true : false
  }

  isMissing = (dist: number): boolean =>
    Math.random() < this.missСhance + dist / 50

  isDead = (): boolean => this.hp <= 0

  run = (): void => {
    this.x++
  }

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
  getType = (): string => this.type
}

export class UltraTank extends Tank {
  protected damage: number = 200
  // protected rotateAngle: number = 180
  protected missСhance: number = 0.5
  protected fireTemp: number = 2
  protected hp: number = 300
  constructor(y: number, type: string) {
    super(y, type)
  }
}

export class AccurateTank extends Tank {
  protected damage: number = 50
  // protected rotateAngle: number = 90
  protected missСhance: number = 0.1
  protected fireTemp: number = 1
  protected hp: number = 150
  constructor(y: number, type: string) {
    super(y, type)
  }
}
