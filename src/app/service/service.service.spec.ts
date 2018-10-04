import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { ServiceService } from './service.service';


describe('ServiceService', () => {

  let injector: TestBed;
  let service: ServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpModule],
      providers: [ServiceService]
    });

    injector = getTestBed();
    service = injector.get(ServiceService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrive data from APIS via GET',()=>{
    const dummyproduct = [{
      "code":200,
      "data":[{
        "_id": 1656545454347,
        "name": 'pizza',
        "category":'food',
        "dateCreated": "2018-10-3"
      }]
    },
    {
      "code":200,
      "data":[{
        "_id": 1656545454347,
        "name": 'pizza',
        "category":'food',
        "dateCreated": "2018-10-3"
      }]
    }]


    const dummycategory = [{
      "code":200,
      "data":[{
        "_id": 1656545454347,
        "__v":0,
        "name": 'food',
        "dateCreated": "2018-10-3"
      }]
    },
    {
      "code":200,
      "data":[{
        "_id": 1656545454347,
          "__v":0,
        "name": 'kitchen',
        "dateCreated": "2018-10-3"
      }]
    }]

    const dummyreport = [{
      "code":200,
      "data":[{
        "_id": 1656545454347,
        "name": 'food',
      }]
    },
    {
      "code":200,
      "data":[{
        "_id": 1656545454347,
        "count": 'kitchen'
      }]
    }]

    service.getAllProduct().subscribe(res=>{
      expect(res.length).toBe(8);
      expect(res.body).toEqual(dummyproduct);
    })

    service.getAllCategory().subscribe(res=>{
      expect(res.length).toBe(5);
      expect(res.body).toEqual(dummycategory);
    })

    service.getReport().subscribe(res=>{
      expect(res.length).toBe(4);
      expect(res.body).toEqual(dummyreport);
    })

    // const req = httpMock.expectOne(service.ROOT_URL+"/product/addprod");
    // expect(req.request.method).toBe('GET');
    // expect(req.cancelled).toBeFalsy();
    // expect(req.request.responseType).toEqual('json');
    // // expect(req.request.url).toBe(`${service.ROOT_URL}/product/allprod`);
    // req.flush(dummyres);

  })


});
