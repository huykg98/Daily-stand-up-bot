 /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import com.pms.jdbc.orm.Key;
import java.util.logging.Logger;

/**
 *
 * @author Negan.Intern
 */
public class Channel {
    @Key(value = "channel_id")
    String id;
    
    @Key(value = "channel_name")
    String channelName;
    
    @Key(value = "dialog_id")
    int dialogId;

    public Channel() {
    }

    public Channel(String id) {
        this.id = id;
    }

    public Channel(String id, String channelName) {
        this.id = id;
        this.channelName = channelName;
    }

    public Channel(String id, String channelName, int dialogId) {
        this.id = id;
        this.channelName = channelName;
        this.dialogId = dialogId;
    }

    public int getDialogId() {
        return dialogId;
    }

    public void setDialogId(int dialogId) {
        this.dialogId = dialogId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }
    
}
