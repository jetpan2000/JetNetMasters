import { Master } from './../Models/master';
import { MasterDataService } from './master-data.service';
import { TestBed, async, inject } from '@angular/core/testing';


describe('MasterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterDataService]
    });
  });

  it('master data servcie should be created', inject([MasterDataService], (service: MasterDataService) => {
    expect(service).toBeTruthy();
  }));
 



 

    describe('#getAllMasters()', () => {

        it('should return an empty array by default', inject([MasterDataService], (service: MasterDataService) => {
            expect(service.getAllMasters()).toEqual([]);
        }));

        it('should return all master', inject([MasterDataService], (service: MasterDataService) => {
            let master1 = new Master({ title: 'Hello 1', firstName : 'firstName 1' });
            let master2 = new Master({ title: 'Hello 2', firstName : 'firstName 2' });
            service.addMaster(master1);
            service.addMaster(master2);
            expect(service.getAllMasters()).toEqual([master1, master2]);
        }));

    });

    describe('#save(master)', () => {

        it('should automatically assign an incrementing id', inject([MasterDataService], (service: MasterDataService) => {
            let master1 = new Master({ title: 'Hello 1', firstName: 'firstName 1' });
            let master2 = new Master({ title: 'Hello 2', firstName: 'firstName 2' });
            service.addMaster(master1);
            service.addMaster(master2);
            expect(service.getMasterById(1)).toEqual(master1);
            expect(service.getMasterById(2)).toEqual(master2);
        }));

    });

    describe('#deleteMasterById(id)', () => {

        it('should remove todo with the corresponding id', inject([MasterDataService], (service: MasterDataService) => {
            let master1 = new Master({ title: 'Hello 1', firstName: 'firstName 1' });
            let master2 = new Master({ title: 'Hello 2', firstName: 'firstName 2' });
            service.addMaster(master1);
            service.addMaster(master2);
            expect(service.getAllMasters()).toEqual([master1, master2]);
            service.deleteMasterById(1);
            expect(service.getAllMasters()).toEqual([master2]);
            service.deleteMasterById(2);
            expect(service.getAllMasters()).toEqual([]);
        }));

        it('should not removing anything if todo with corresponding id is not found', inject([MasterDataService], (service: MasterDataService) => {
            let master1 = new Master({ title: 'Hello 1', firstName: 'firstName 1' });
            let master2 = new Master({ title: 'Hello 2', firstName: 'firstName 2' });
            service.addMaster(master1);
            service.addMaster(master2);
            expect(service.getAllMasters()).toEqual([master1, master2]);
            service.deleteMasterById(3);
            expect(service.getAllMasters()).toEqual([master1, master2]);
        }));

    });

    describe('#updateMasterById(id, values)', () => {

        it('should return todo with the corresponding id and updated data', inject([MasterDataService], (service: MasterDataService) => {
            let master = new Master({ title: 'Hello 1', firstName: 'John' });
            service.addMaster(master);
            let updatedMaster = service.updateMasterById(1, {
                title: 'new title', firstName : 'New John'
            });
            expect(updatedMaster.title).toEqual('new title');
            expect(updatedMaster.firstName).toEqual('New John');
        }));

        it('should return null if todo is not found', inject([MasterDataService], (service: MasterDataService) => {
            let master = new Master({ title: 'Hello 1', firstName: 'John' });
            service.addMaster(master);
            let updatedMaster = service.updateMasterById(2, {
                title: 'new title', firstName: 'New John'
            });
            expect(updatedMaster).toEqual(null);
        }));

    }); 
});
