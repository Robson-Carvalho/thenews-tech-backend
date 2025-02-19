class Subscriber {
  public readonly id: string;
  public email: string;
  public createdAt: string;

  private constructor(id: string, email: string, createdAt: string) {
    this.id = id;
    this.email = email;
    this.createdAt = createdAt;
  }

  public static create(
    id: string,
    email: string,
    createdAt: string
  ): Subscriber {
    return new Subscriber(id, email, createdAt);
  }
}

export { Subscriber };
