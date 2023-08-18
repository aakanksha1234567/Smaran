import { Observable } from 'rxjs' 
import { IFeedbackModel } from '../../model/Feedback-model'
export abstract class IFeedbackservices{
    abstract feedback(model: IFeedbackModel,file: any ): Observable<any>; 

}