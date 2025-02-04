import { Injectable } from "@nestjs/common";
import { CreateNumberRequestDto } from "../dto/create-num-request.dto";
import { PhoneVerify } from "../entity/phoneVerify";
import { CreateNumberResponseDto } from "../dto/create-num-response.dto";
import { CheckNumberResponseDto } from "../dto/check-num-response.dto";

@Injectable()
export class PhoneVerifyMapper {
    dtoToEntity({phoneNumber}: CreateNumberRequestDto, newRandomNumber: string): PhoneVerify{
        const phoneVerify = new PhoneVerify();

        phoneVerify.phoneNumber = phoneNumber;
        phoneVerify.code = newRandomNumber;

        return phoneVerify;
    }

    updateEntity(isPhoneNumExist: PhoneVerify, updateRandomNumber: string): PhoneVerify{
        isPhoneNumExist.code = updateRandomNumber;
        isPhoneNumExist.updateAt = new Date();

        return isPhoneNumExist;
    }

    createEntityToDto(randomNumber: PhoneVerify): CreateNumberResponseDto{
        return{
            code: randomNumber.code
        };
    }

    checkEntityToDto(result: boolean): CheckNumberResponseDto{
        return{
            result: result
        }
    }


}

