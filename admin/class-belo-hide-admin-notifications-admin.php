<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://wpbelo.com
 * @since      1.0.2
 *
 * @package    Belo_Hide_Admin_Notifications
 * @subpackage Belo_Hide_Admin_Notifications/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Belo_Hide_Admin_Notifications
 * @subpackage Belo_Hide_Admin_Notifications/admin
 * @author     Belo <https://wpbelo.com>
 */
class Belo_Hide_Admin_Notifications_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.2
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.2
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.2
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.2
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Belo_Hide_Admin_Notifications_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Belo_Hide_Admin_Notifications_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		$cur_user = wp_get_current_user();
		$CurentUserRoles = (array) $cur_user->roles;
		//var_dump($user);
		
		$hide_selected_users_data=[];
		$hide_selected_users_data = get_option('belo_hide_admin_notifications_admin_data');
		if(!empty($hide_selected_users_data)){
			if((in_array('administrator', $CurentUserRoles) ) && (in_array($cur_user->user_login, $hide_selected_users_data)) ){
			 
				wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/belo-hide-admin-notifications-admin-hide.css', array(), $this->version, 'all' );
	 
			}
		}
		else{
			wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/belo-hide-admin-notifications-admin-hide.css', array(), $this->version, 'all' );

		}
		 
      wp_enqueue_style( $this->plugin_name.'belo-general-css', plugin_dir_url( __FILE__ ) . 'css/belo-hide-admin-notifications-general.css', array(), $this->version, 'all' );
  
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.2
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Belo_Hide_Admin_Notifications_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Belo_Hide_Admin_Notifications_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		$cur_user = wp_get_current_user();
		$CurentUserRoles = (array) $cur_user->roles;
		//var_dump($user);
		
		$hide_selected_users_data=[];
		$hide_selected_users_data = get_option('belo_hide_admin_notifications_admin_data');

		if(!empty($hide_selected_users_data)){
			if((in_array('administrator', $CurentUserRoles) ) && (in_array($cur_user->user_login, $hide_selected_users_data)) ){
			 
				wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/belo-hide-admin-notifications-admin-hide.js', array( 'jquery' ), $this->version, false );
	 
			}
		}
		else{
			wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/belo-hide-admin-notifications-admin-hide.js', array( 'jquery' ), $this->version, false );

		}
      
      

	}
	public function settings_page() {
		 
      $menu_url = menu_page_url( 'belo_main', false );

      if ( $menu_url ) {
         add_submenu_page( 'belo_main', __( 'Hide admin dashboard notifications', 'belo-hide-admin-notifications' ), __( 'Hide dashboard notifications', 'belo-hide-admin-notifications' ), 'manage_options', 'belo-hide-admin-notifications', array($this,'settings_page_callback') ); 
         } else {
          
         add_menu_page( "WP-BELO", "WP-BELO", "manage_options", "belo_main",  '', plugin_dir_url( __FILE__ ) .'newlogo1.ico'); 
         add_submenu_page( 'belo_main', __( 'Hide admin dashboard notifications', 'belo-hide-admin-notifications' ), __( 'Hide dashboard notifications', 'belo-hide-admin-notifications' ), 'manage_options', 'belo_main', array($this,'settings_page_callback') ); 
   
         add_submenu_page( 'belo_main', 'xxx', 'xxx', 'manage_options', 'admin-cod-menu-hack', false ); 
   
      }
      
	}
   
   public function admin_cod_menu_hack( $submenu_file ) {
      global $plugin_page;
      $hidden_item = array(
          'admin-cod-menu-hack' => true,
      );
      foreach ( $hidden_item as $submenu => $unused ) {
          remove_submenu_page( 'belo_main', $submenu );
      }
      return $submenu_file;
  }

  /**
	 * Add footer text to the WordPress admin screens.
	 *
	 * @since 4.0.0
	 *
	 * @return void
	 */
	public function addFooterText($text ) {
        $currentScreen = function_exists( 'get_current_screen' ) ? get_current_screen() : false;
		 

		if (  is_object( $currentScreen ) && !empty( $currentScreen->id ) &&   $currentScreen->id =="toplevel_page_belo_main") {
			
 
		$linkText = esc_html__( 'Give us a 5-star rating!', 'belo-hide-admin-notifications' );
		$href     = 'https://wordpress.org/support/plugin/hide-admin-dashboard-notifications/reviews/?filter=5#new-post';

		$link1 = sprintf(
			'<a href="%1$s" target="_blank" title="%2$s">&#9733;&#9733;&#9733;&#9733;&#9733;</a>',
			$href,
			$linkText
		);

		$link2 = sprintf(
			'<a href="%1$s" target="_blank" title="%2$s">WordPress.org</a>',
			$href,
			$linkText
		);

		printf(
			
            esc_html__( 'Make our day by leaving us a review for %1$s %2$s on %3$s. You are awesome!', 'belo-hide-admin-notifications' ),
			sprintf( '<strong>%1$s</strong>', esc_html( 'Hide Admin Dashboard Notifications' ) ),
			wp_kses_post( $link1 ),
			wp_kses_post( $link2 )
		);

 		global $wp_version;
		printf(
			wp_kses_post( '<p class="alignright">%1$s</p>' ),
			sprintf(
				 
				esc_html__( 'WordPress %1$s | Hide Admin Dashboard Notifications %2$s', 'belo-hide-admin-notifications' ),
				esc_html( $wp_version ),
				esc_html( '1.0.2' )
			)
		);

		remove_filter( 'update_footer', 'core_update_footer' );
         
		}
        else{
            return $text;
        }
       
	}

   
	 function settings_page_callback() {

      //CSS
      wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/belo-hide-admin-notifications-admin-hide.css', array(), $this->version, 'all' );
      wp_enqueue_style( $this->plugin_name.'belo-hide', plugin_dir_url( __FILE__ ) . 'css/belo-hide-admin-notifications-admin.css', array(), $this->version, 'all' );
      wp_enqueue_style( $this->plugin_name.'select2', plugin_dir_url( __FILE__ ) . 'css/select2.css', array(), $this->version, 'all' );

      //JS
      wp_enqueue_script( $this->plugin_name.'select2', plugin_dir_url( __FILE__ ) . 'js/select2.js', array( 'jquery' ), $this->version, false );
      wp_enqueue_script( $this->plugin_name.'hide', plugin_dir_url( __FILE__ ) . 'js/belo-hide-admin-notifications-admin.js', array( 'jquery',$this->plugin_name.'select2' ), $this->version, false );
      wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/belo-hide-admin-notifications-admin-hide.js', array( 'jquery' ), $this->version, false );


		?>

<div class="belo-main-wrapper">
    <div class=" wrapper belo-hide-notifications-settings-page header">
        <div>
            <h1 translate="no" style="float: right;"> Hide Admin Dashboard Notifications </h1>
            <img style="border-radius: 11px;" viewbox="0 0 52 52" width="70" height="70" class="belo-logo"
                src="<?php echo plugin_dir_url( __FILE__ ) .'logobelo.png'; ?>">
        </div>
        <div translate="no" style="align-self: center;color: #ffdf5e;display: flex;justify-content: center;">
            <div style="align-self: center;margin-right: 20px;">Over 1,600 businesses trust us</div>
            <a href="https://wpbelo.com/wordpress-development/" target="_blank"
                style="padding: 10px 59px;background: #ffffff;border: solid 1px #1e1010;color: #0e0d0d;text-decoration: none;border-radius: 5px;font-weight: bold;">Contact
                us</a>
        </div>
    </div>



</div>
<form method="POST" style="display:flex;">
    <div class=" wrapper belo-hide-notifications-settings-page">
        <div>
            <div>
                <div class=" action-panel belo-hide-notifications-settings-page shadow-div actions-panel "
                    style="background: #fff;border: 1px solid #d6d6d6;box-shadow: 0 1px 8px 0 rgb(0 0 0 / 5%), 0 2px 1px 0 rgb(0 0 0 / 3%);border-radius: 0px;">
                    <div class="panel-header-wrap panel-open has-summary-no-child" id="wpmdb-action-buttons"
                        style="grid-template-columns: auto;padding-top: 15px;">
                        <h2 id="panel-title-action_buttons" class="panel-title">
                            <?php echo __('General settings', 'belo-hide-admin-notifications'); ?> </h2>
                    </div>
                    <div class="panel-open panel-body-wrap" style="
                  position: relative;
                  ">
                        <div id="action_buttons" style="overflow: hidden; opacity: 1;">
                            <div class="open panel-body"
                                style="padding: 26px 22px;background: #fff;border-top: 1px solid #d6d6d6;display: grid;grid-template-columns: none;border-radius: 0 0 6px 6px;">
                                <div class="action-buttons btn-section"
                                    style=" margin-bottom: 0!important; display: grid; grid-template-columns: repeat(1,minmax(0,1fr)); padding: 0rem 0em 1.5rem 0rem; ">
                                    <h4 style=" margin: 0px !important; ">
                                        <?php echo  __('Admin accounts', 'belo-hide-admin-notifications'); ?></h4>
                                    <div>
                                        <div>
                                            <h4 style=" margin-top: 0px !important; "><?php 
									$args = array(
										'role'    => 'administrator',
										'orderby' => 'user_nicename',
										'order'   => 'ASC'
									);
									$users_data = get_users( $args );

									if(isset($_POST['belo_hide_admin_notifications_admin_data'])){
                             
                                 // Initialize the new array that will hold the sanitize values
                                 $selectedusersOptions = array();
                              
                                 // Loop through the input and sanitize each of the values
                                 foreach ( $_POST['belo_hide_admin_notifications_admin_data'] as $key => $val ) {
                                    $selectedusersOptions[ $key ] = sanitize_text_field( $val );
                                 }
                               
                              
                              
                              Update_option('belo_hide_admin_notifications_admin_data', $selectedusersOptions  );
                              
                              $success_alert = '<div class="container" style=" position: absolute; left: 510px; top: 0; "> <div class="notification success"> 
                                <span style=" color: #22c45c; ">'.__("Saved successfully!", "belo-hide-admin-notifications").'</span></div></div>';
                               echo wp_kses( $success_alert,
                                 array(
                                    'div'     => array(
                                       'style'  => array(), 
                                       'class'  => array(), 
                                    ),
                                    'span'      => array(
                                       'style'  => array(), 
                                    ),
                                    
                                 ));
                            }

                           $selected_users_data = get_option('belo_hide_admin_notifications_admin_data');

                            
									$output_res = '<select style="opacity:0!important; height:90px!important;"   name="belo_hide_admin_notifications_admin_data[]"  id="belo_hide_admin_notifications_admin_data" multiple="multiple">';
									foreach ( $users_data as $user ) {

                              if(empty($selected_users_data)){
                                 $selected_status = ' selected="selected" ';
                              }
                              else{

                                 if(in_array($user->user_login,$selected_users_data)){
                                    $selected_status = ' selected="selected" ';
                                 }
                                 else{
                                    $selected_status = ' ';
                                 }
                                
                              }

										$output_res .= '<option '.$selected_status.' value="'.$user->user_login.'">';
										$output_res .= $user->user_login;  
										$output_res .= '</option>';
									}

									$output_res .= '</select>';
									 
									echo wp_kses( $output_res,
                           array(
                               'select'      => array( 
                                   'style' => array(),
                                   'name'  => array(),
                                   'id' => array(),
                                   'multiple' => array(),
                               ),
                               'option'     => array(
                                 'value'  => array(),
                                 'selected' => array(),
                             ) 
                           ));
							
									?></h4>
                                            <div>
                                                <?php echo  __('Select the admin accounts to hide the dashboard notifications', 'belo-hide-admin-notifications'); ?>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sc-bdVaJa dFpchr" style="margin-top:30px !important">
            <input class="belo-hide-notifications-settings-page-save-button" type="submit"
                value="<?php echo __('Save', 'belo-hide-admin-notifications'); ?>" class="btn submit_data">
        </div>
        <div class="card"
            style="width: 100%;max-width: 100%;margin-top: 52px;filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));border: none;bottom: 0px;position: absolute;left: 0;right: 0;">
            <div class="card belo-first" style="padding-left: 4px !important;">
                <div>Hello Buddy! Hope you find our plugin useful. If you haven't yet, please, we request for your
                    support
                    by leaving us a 5 star review for <strong>Hide Admin Dashboard Notifications</strong> <a
                        href="https://wordpress.org/support/plugin/hide-admin-dashboard-notifications/reviews/?filter=5#new-post"
                        target="_blank" title="Give us a 5-star rating!" style="color: #f89e48;">★★★★★</a> on <a
                        href="https://wordpress.org/support/plugin/hide-admin-dashboard-notifications/reviews/?filter=5#new-post"
                        target="_blank" title="Give us a 5-star rating!"
                        style="color: black; text-decoration: none;">WordPress.org</a><br>
                    <a href="https://wordpress.org/support/plugin/hide-admin-dashboard-notifications/reviews/?filter=5#new-post"
                        target="_blank" title="Give us a 5-star rating!" style="">Just click here
                    </a>
                </div>

            </div>
            <div class="" style="margin-top: 42px;padding-left: 4px;"> <span
                    style="text-transform: uppercase;color: black;">Check out our other Plugins</span>
                <div class="" style="width: 100%;margin-top: 11px;">
                    <div style="margin-bottom: 9px;"><a
                            href="https://wordpress.org/plugins/admin-previous-and-next-order-edit-links-for-woocommerce/"
                            target="_blank" title="Give us a 5-star rating!"
                            style="color: #f89e48;text-decoration: none;"><strong style="color: black;">1. Admin
                                Previous
                                and Next Order Edit Links for Woocommerce</strong><br> ★★★★★</a><br>
                    </div>
                    <div style="margin-bottom: 9px;"><a
                            href="https://wordpress.org/plugins/belo-add-to-cart-redirect-for-woocommerce/"
                            target="_blank" title="Give us a 5-star rating!"
                            style="color: #f89e48;text-decoration: none;"><strong style="color: black;">2. Add to Cart
                                Redirect for Woocommerce</strong><br> ★★★★★</a><br>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>



    <div class=" wrapper card belo-hide-notifications-settings-page-services"
        style="width: 40%;z-index: 99;filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));border: none !important;margin-top: 0px !important;padding: 0;">
        <img style="width: 100%; " class="belo-logo-services"
            src="<?php echo plugin_dir_url( __FILE__ ) .'services.png'; ?>">
        <h2 style="text-align: center;font-size: 20px;margin: 0px;margin-top: 24px;text-transform: uppercase;">We also
            offer the
            following<br /> Services</h2>
        <div style="padding-left:30px; padding-right:30px;">
            <div class="srv-wrap-main">
                <div class="srv-wrap">
                    <div class="srv-card">Custom Plugin Development</div>
                    <div>Tailored solutions to meet your unique needs.</div>
                </div>
                <div class="srv-wrap">
                    <div class="srv-card">Plugin Customization</div>
                    <div>Customize existing plugins to suit your specific requirements.</div>
                </div>
            </div>
            <div class="srv-wrap-main">
                <div class="srv-wrap">
                    <div class="srv-card">Performance Optimization</div>
                    <div>Enhance website speed and efficiency for optimal user experience.</div>
                </div>
                <div class="srv-wrap">
                    <div class="srv-card">Security Audits</div>
                    <div>Conduct thorough security audits to identify and address vulnerabilities.</div>
                </div>
            </div>
            <div class="srv-wrap-main">
                <div class="srv-wrap">
                    <div class="srv-card">Database Optimization</div>
                    <div>Optimize database performance for faster website loading times.</div>
                </div>
                <div class="srv-wrap">
                    <div class="srv-card">Server Configuration</div>
                    <div>Configure server settings for optimal WordPress performance.</div>
                </div>
            </div>
            <div class="srv-wrap-main">
                <div class="srv-wrap">
                    <div class="srv-card">API Integration</div>
                    <div>Integrate third-party APIs to extend functionality and enhance user experience.</div>
                </div>
                <div class="srv-wrap">
                    <div class="srv-card">Backup & Recovery</div>
                    <div>Implement automated backup solutions and disaster recovery plans.</div>
                </div>
            </div>
            <div style="width: 100%;text-align: center;margin-top: 37px;margin-bottom: 37px;position: relative;"><a
                    href="https://wpbelo.com/wordpress-development/" target="_blank"
                    style="padding: 10px 59px;background: #ffffff;border: solid 1px #1e1010;color: #0e0d0d;text-decoration: none;border-radius: 5px;font-weight: bold;">Explore
                    &gt;</a>
            </div>
        </div>
    </div>
</form>
</div>
<?php
      
    
     
      
	}

}