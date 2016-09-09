<?php
/**
 * @author Erol Soyöz <erol@soyoz.com>
 */

namespace Soyoz\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BlogController extends Controller
{
    public function indexAction()
    {
        $posts = $this->getDoctrine()
        ->getRepository('SoyozBlogBundle:Post')
        ->findAll();
        /**
        die(dump($posts));
        **/

        return $this->render('SoyozBlogBundle:Blog:index.html.twig', array(
            'posts' => $posts
        ));
    }

    public function showAction($slug)
    {
        $post = $this->getDoctrine()
        ->getRepository('SoyozBlogBundle:Post')
        ->findOneBySlug($slug);
        /**
        die(dump($post));
        **/

        return $this->render('SoyozBlogBundle:Blog:show.html.twig', array(
            'post' => $post
        ));
    }

}
