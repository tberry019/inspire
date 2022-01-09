import { BackGround } from "../Models/BackGround.js"
import { sandboxImages } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";

class BackGroundService {

  async getBackGroundImage() {
    const res = await sandboxImages.get()
    // console.log('random image thing response from bg service', res.data.url)
    ProxyState.backGround = res.data.largeImgUrl
    console.log('Proxystate background', ProxyState.backGround)

  }
}

export const backGroundService = new BackGroundService();