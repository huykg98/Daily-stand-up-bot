/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.util;

/**
 *
 * @author Negan.Intern
 */
public class RESTURIConstants {
    	public static final String GET_ALL_STANDUP = "/api/standups";
    	public static final String GET_STANDUP_BY_ID = "/api/standup/{id}";
        public static final String CREATE_DAILY_STANDUP = "/api/standup/create";
    	public static final String UPDATE_DAILY_STANDUP = "/api/standup/update";
        public static final String GET_ALL_USER = "/api/user";
        public static final String GET_ALL_REPORT = "/api/user-report";
        public static final String GET_ALL_REPORT_DETAIL_BY_ID_REPORT = "/api/user-report/{id}";
        public static final String GET_USER_BY_ID = "/api/user/{id}";
        public static final String GET_USER_REPORT_FILTER = "/api/user-report/filter";
        public static final String GET_ALL_CHANNEL = "/api/channel";
        public static final String GET_SUMMARY = "/api/summary";
        public static final String GET_ALL_SCHEDULE = "/api/schedules";		
        public static final String CHANGE_STATUS = "/api/standup/status/{id}/{state}";
        public static final String GET_BLOCKERS = "/api/blockers";
        public static final String GET_REPORT_VIEW = "/api/report-view";
        public static final String GET_SUMMARY_TOTAL_REPORT = "/api/total-report";
}
                

