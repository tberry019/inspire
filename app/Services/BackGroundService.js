import { BackGround } from "../Models/BackGround";

class BackGroundService {

  async getBackGroundImage() {
    const res = await sandboxImages.get()
    console.log('random image thing response from bg service', res.data.url)
    ProxyState.backGroundService = res.url.map(b => new BackGround(b))
    console.log('Proxystate background', ProxyState.backGroundService)

  }
}

export const backGroundService = new BackGroundService();