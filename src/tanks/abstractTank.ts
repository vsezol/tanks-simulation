export default abstract class ATank {
  protected abstract type: string
  protected abstract id: string
  protected abstract damage: number
  protected abstract rotateAngle: number
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
  abstract takeDamage(dmg: number): void
  abstract getFireTemp(): number
  abstract getType(): string
  abstract getId(): string
  abstract getParams(): any[]
  abstract getCords(): [number, number]
}