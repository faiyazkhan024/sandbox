import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 100 })
  points: number;

  @BeforeInsert()
  async autoGenerateUsername() {
    this.username = this.email.split('@')[0];
    await new Promise<void>((resolve, reject) => {
      bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) reject(err);
        this.password = hash;
        resolve();
      });
    });
  }
}
