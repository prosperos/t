<?php

namespace DateViewPosts;

class PostDateViewer
{
    public function __construct()
    {
        add_action('init', array($this, 'init'));

        add_action('wp_enqueue_scripts', array($this, 'enqueue_plugin_assets'));
    }

    public function enqueue_plugin_assets()
    {
        $plugin_url = plugins_url('/date-view-posts/', 'date-view-posts/');

        wp_enqueue_style('date-view-posts-css', $plugin_url . 'dist/styles.css', array(), '1.0.0', 'all');
        wp_enqueue_script('date-view-posts-js', $plugin_url . 'dist/bundle.js', array('jquery'), '1.0.0', true);
    }

    public function init()
    {
        add_shortcode('display_articles', array($this, 'shortcode_handler'));
    }

    public function shortcode_handler($atts)
    {
        $start_date = isset($atts['start_date']) ? sanitize_text_field($atts['start_date']) : '';
        $end_date = isset($atts['end_date']) ? sanitize_text_field($atts['end_date']) : '';

        ob_start();
        $this->display_articles_within_date_range($start_date, $end_date);
        return ob_get_clean();
    }

    public function display_articles_within_date_range($start_date, $end_date)
    {

        $start_date = (new \DateTime($start_date))->format('Y-m-d');
        $end_date = (new \DateTime($end_date))->format('Y-m-d');
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => -1,
            'date_query' => array(
                'after' => $start_date,
                'before' => $end_date,
                'inclusive' => true,
            ),
        );


        $query = new \WP_Query($args);

        if ($query->have_posts()) {
            echo '<div class="dvp-articles">';
            while ($query->have_posts()) {
                $query->the_post();
                ?>
                <article class="dvp-article-card dvp-open-article-popup-js">
                    <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                    <div>
                        <date class="dvp-date"><?php echo get_the_date('d.m.Y'); ?></date>
                    </div>
                    <a href="<?php the_permalink(); ?>" class="dvp-title"><?php the_title(); ?></a>
                    <div class="dvp-content">
                        <?php
                        //як показує моя практика the_excerpt рідко заповнюють тому вирішив обрізати контент хоча можна і the_excerpt але траба наповнити
                        $content = get_the_content();
                        $trimmed_content = wp_trim_words($content, 35);
                        echo $trimmed_content; ?>
                    </div>
                </article>
                <?php
            }
            wp_reset_postdata();
            echo ' <div class="dvp-popup"></div></div>';
        } else {
            echo 'No articles';
        }
    }
}

new PostDateViewer();
