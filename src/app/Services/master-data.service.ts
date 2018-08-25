import { Injectable } from '@angular/core';
import { Master } from './../Models/master';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

    lastId: number = 0;
    // Placeholder for todos
    masters: Master[] = [];


    constructor() { }

    // Simulate POST /Masters
    addMaster(master: Master): MasterDataService {
        if (!master.id) {
            master.id = ++this.lastId;
        }
        this.masters.push(master);
        return this;
    }

    // Simulate DELETE /todos/:id
    deleteMasterById(id: number): MasterDataService {
        this.masters = this.masters
            .filter(m => m.id !== id);
        return this;
    }

    // Simulate PUT /todos/:id
    updateMasterById(id: number, values: Object = {}): Master {
        let master = this.getMasterById(id);
        if (!master) {
            return null;
        }
        Object.assign(master, values);
        return master;
    }

    // Simulate GET /todos
    getAllMasters(): Master[] {
        return this.masters;
    }

    // Simulate GET /todos/:id
    getMasterById(id: number): Master {
        return this.masters
            .filter(m => m.id === id)
            .pop();
    }
}

 