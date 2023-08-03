import { Observable } from 'rxjs'; 
import { IPastAchievementModel } from '../../model/PastAchievement-model';

export abstract class IPastAchievementService{
  
    abstract addpastachievement(model: IPastAchievementModel): Observable<any>; 
}