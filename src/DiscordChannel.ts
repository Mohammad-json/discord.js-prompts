import { ChannelInterface } from "prompt-anything";
import { DiscordVisual } from "./visuals/DiscordVisual";
import { MenuVisual } from "./visuals/MenuVisual";
import { MessageVisual } from "./visuals/MessageVisual";
import { Message } from "./types/Message";
import { MessageOptions } from "./types/MessageOptions";
import { TextChannel } from "./types/TextChannel";

export class DiscordChannel implements ChannelInterface {
  channel: TextChannel;
  
  constructor (channel: TextChannel) {
    this.channel = channel
  }

  async sendMenuVisual (visual: MenuVisual): Promise<Message> {
    let options: MessageOptions = {}
    if (visual.options) {
      options = {
        ...visual.options
      }
    }
    options.embed = visual.menu.getEmbedOfPage(0)
    const sent = await this.channel.send('', options)
    if (visual.menu.canPaginate()) {
      await visual.menu.setUpPagination(sent)
    }
    return sent
  }

  async sendMessageVisual (visual: MessageVisual): Promise<Message> {
    return this.channel.send(visual.text, visual.options)
  }

  async send (visual: DiscordVisual): Promise<Message> {
    if (visual instanceof MenuVisual) {
      return this.sendMenuVisual(visual)
    } else {
      return this.sendMessageVisual(visual)
    }
  }
  
}
