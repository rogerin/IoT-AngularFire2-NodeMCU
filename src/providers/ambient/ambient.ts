
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class AmbientProvider {
  private PATH = 'ambients/';

  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(ambient: any) {
    return new Promise((resolve, reject) => {
      if (ambient.key) {
        this.db.list(this.PATH)
          .update(ambient.key, { name: ambient.name, active: ambient.active  })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ name: ambient.name, active: false })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
