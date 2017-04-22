package com.mymaterialdesignrnative;

import android.app.Activity;
import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  public static Activity activity;

    @Override
    protected String getMainComponentName() {
       activity = this;
        return "MyMaterialDesignRNative";
    }
}
