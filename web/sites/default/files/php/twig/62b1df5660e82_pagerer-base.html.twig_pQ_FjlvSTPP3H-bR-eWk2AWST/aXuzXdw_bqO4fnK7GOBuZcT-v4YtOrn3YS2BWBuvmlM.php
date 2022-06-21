<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/pagerer/templates/pagerer-base.html.twig */
class __TwigTemplate_0a1cd1e628161067031605666c675827cf881e326616f48fc809d7def4a51282 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 41
        $context["classes"] = [0 => "pager", 1 => ("pagerer-pager-" . $this->sandbox->ensureToStringAllowed(        // line 43
($context["style"] ?? null), 43, $this->source)), 2 => ((        // line 44
($context["embedded"] ?? null)) ? ("pagerer-scrollpane-embedded") : (""))];
        // line 47
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("pagerer/base.css"), "html", null, true);
        echo "
";
        // line 48
        if (($context["items"] ?? null)) {
            // line 49
            echo "    <nav ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 49), 49, $this->source), "html", null, true);
            echo " role=\"navigation\" aria-labelledby=\"pagination-heading\"";
            // line 50
            if (($context["id"] ?? null)) {
                // line 51
                echo " id=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 51, $this->source), "html", null, true);
                echo "\"
";
            }
            // line 52
            echo ">
      <h4 id=\"pagination-heading\" class=\"visually-hidden\">";
            // line 53
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Pagination"));
            echo "</h4>
      ";
            // line 54
            if (($context["embedded"] ?? null)) {
                // line 55
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("pagerer/scrollpane"), "html", null, true);
                echo "
        <div class=\"pagerer-viewport\">
      ";
            }
            // line 58
            echo "          <ul class=\"pager__items js-pager__items\">
            ";
            // line 60
            echo "            ";
            if (twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, false, true, 60)) {
                // line 61
                echo "              ";
                if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, true, true, 61), "href", [], "any", true, true, true, 61)) {
                    // line 62
                    echo "                <li class=\"pager__item pager__item--first\">
                  <a href=\"";
                    // line 63
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, false, true, 63), "href", [], "any", false, false, true, 63), 63, $this->source), "html", null, true);
                    echo "\" title=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, false, true, 63), "title", [], "any", false, false, true, 63), 63, $this->source), "html", null, true);
                    echo "\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, false, true, 63), "attributes", [], "any", false, false, true, 63), 63, $this->source), "href", "title"), "html", null, true);
                    echo ">
                    <span class=\"visually-hidden\">";
                    // line 64
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, false, true, 64), "reader_text", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
                    echo "</span>
                    <span aria-hidden=\"true\">";
                    // line 65
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, false, true, 65), "text", [], "any", false, false, true, 65), 65, $this->source), "html", null, true);
                    echo "</span>
                  </a>
                </li>
              ";
                } else {
                    // line 69
                    echo "                <li class=\"pager__item pager__item--first\">
                  <span aria-hidden=\"true\" role=\"presentation\">";
                    // line 70
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "first", [], "any", false, false, true, 70), "text", [], "any", false, false, true, 70), 70, $this->source), "html", null, true);
                    echo "</span>
                </li>
              ";
                }
                // line 73
                echo "            ";
            }
            // line 74
            echo "            ";
            // line 75
            echo "            ";
            if (twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, false, true, 75)) {
                // line 76
                echo "              ";
                if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, true, true, 76), "href", [], "any", true, true, true, 76)) {
                    // line 77
                    echo "                <li class=\"pager__item pager__item--previous\">
                  <a href=\"";
                    // line 78
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, false, true, 78), "href", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
                    echo "\" title=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, false, true, 78), "title", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
                    echo "\" rel=\"prev\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, false, true, 78), "attributes", [], "any", false, false, true, 78), 78, $this->source), "href", "title", "rel"), "html", null, true);
                    echo ">
                    <span class=\"visually-hidden\">";
                    // line 79
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, false, true, 79), "reader_text", [], "any", false, false, true, 79), 79, $this->source), "html", null, true);
                    echo "</span>
                    <span aria-hidden=\"true\">";
                    // line 80
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, false, true, 80), "text", [], "any", false, false, true, 80), 80, $this->source), "html", null, true);
                    echo "</span>
                  </a>
                </li>
              ";
                } else {
                    // line 84
                    echo "                <li class=\"pager__item pager__item--previous\">
                  <span aria-hidden=\"true\" role=\"presentation\">";
                    // line 85
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "previous", [], "any", false, false, true, 85), "text", [], "any", false, false, true, 85), 85, $this->source), "html", null, true);
                    echo "</span>
                </li>
              ";
                }
                // line 88
                echo "            ";
            }
            // line 89
            echo "            ";
            // line 90
            echo "            ";
            if (twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "prefix", [], "any", false, false, true, 90)) {
                // line 91
                echo "              <li class=\"pager__item pagerer-prefix\">
                <span aria-hidden=\"true\" role=\"presentation\">";
                // line 92
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "prefix", [], "any", false, false, true, 92), "text", [], "any", false, false, true, 92), 92, $this->source), "html", null, true);
                echo "</span>
              </li>
            ";
            }
            // line 95
            echo "            ";
            // line 96
            echo "            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "pages", [], "any", false, false, true, 96));
            foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                // line 97
                echo "              ";
                if (twig_get_attribute($this->env, $this->source, $context["item"], "is_breaker", [], "any", false, false, true, 97)) {
                    // line 98
                    echo "                <li class=\"pager__item pager__item--ellipsis pagerer-breaker\" role=\"presentation\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 98), 98, $this->source), "html", null, true);
                    echo "</li>
              ";
                } elseif (twig_get_attribute($this->env, $this->source,                 // line 99
$context["item"], "is_separator", [], "any", false, false, true, 99)) {
                    // line 100
                    echo "                <li class=\"pager__item pager__item--ellipsis pagerer-separator\" role=\"presentation\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
                    echo "</li>
              ";
                } elseif (twig_get_attribute($this->env, $this->source,                 // line 101
$context["item"], "widget", [], "any", false, false, true, 101)) {
                    // line 102
                    echo "                <li class=\"pager__item pagerer-widget\">
                  ";
                    // line 103
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "widget", [], "any", false, false, true, 103), 103, $this->source), "html", null, true);
                    echo "
                </li>
              ";
                } elseif (twig_get_attribute($this->env, $this->source,                 // line 105
$context["item"], "href", [], "any", true, true, true, 105)) {
                    // line 106
                    echo "                <li class=\"pager__item";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(((twig_get_attribute($this->env, $this->source, $context["item"], "is_current", [], "any", false, false, true, 106)) ? (" is-active") : ("")));
                    echo "\">
                  <a href=\"";
                    // line 107
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "href", [], "any", false, false, true, 107), 107, $this->source), "html", null, true);
                    echo "\" title=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 107), 107, $this->source), "html", null, true);
                    echo "\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 107), 107, $this->source), "href", "title"), "html", null, true);
                    echo ">
                    <span class=\"visually-hidden\">";
                    // line 108
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "reader_text", [], "any", false, false, true, 108), 108, $this->source), "html", null, true);
                    echo "</span>";
                    // line 109
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 109), 109, $this->source), "html", null, true);
                    // line 110
                    echo "</a>
                </li>
              ";
                } else {
                    // line 113
                    echo "                <li class=\"pager__item pager__item--ellipsis pagerer-no-link\" role=\"presentation\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 113), 113, $this->source), "html", null, true);
                    echo "</li>
              ";
                }
                // line 115
                echo "            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 116
            echo "            ";
            // line 117
            echo "            ";
            if (twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "suffix", [], "any", false, false, true, 117)) {
                // line 118
                echo "              <li class=\"pager__item pagerer-suffix\">
                <span aria-hidden=\"true\" role=\"presentation\">";
                // line 119
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "suffix", [], "any", false, false, true, 119), "text", [], "any", false, false, true, 119), 119, $this->source), "html", null, true);
                echo "</span>
              </li>
            ";
            }
            // line 122
            echo "            ";
            // line 123
            echo "            ";
            if (twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, false, true, 123)) {
                // line 124
                echo "              ";
                if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, true, true, 124), "href", [], "any", true, true, true, 124)) {
                    // line 125
                    echo "                <li class=\"pager__item pager__item--next\">
                  <a href=\"";
                    // line 126
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, false, true, 126), "href", [], "any", false, false, true, 126), 126, $this->source), "html", null, true);
                    echo "\" title=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, false, true, 126), "title", [], "any", false, false, true, 126), 126, $this->source), "html", null, true);
                    echo "\" rel=\"next\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, false, true, 126), "attributes", [], "any", false, false, true, 126), 126, $this->source), "href", "title", "rel"), "html", null, true);
                    echo ">
                    <span class=\"visually-hidden\">";
                    // line 127
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, false, true, 127), "reader_text", [], "any", false, false, true, 127), 127, $this->source), "html", null, true);
                    echo "</span>
                    <span aria-hidden=\"true\">";
                    // line 128
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, false, true, 128), "text", [], "any", false, false, true, 128), 128, $this->source), "html", null, true);
                    echo "</span>
                  </a>
                </li>
              ";
                } else {
                    // line 132
                    echo "                <li class=\"pager__item pager__item--next\">
                  <span aria-hidden=\"true\" role=\"presentation\">";
                    // line 133
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "next", [], "any", false, false, true, 133), "text", [], "any", false, false, true, 133), 133, $this->source), "html", null, true);
                    echo "</span>
                </li>
              ";
                }
                // line 136
                echo "            ";
            }
            // line 137
            echo "            ";
            // line 138
            echo "            ";
            if (twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, false, true, 138)) {
                // line 139
                echo "              ";
                if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, true, true, 139), "href", [], "any", true, true, true, 139)) {
                    // line 140
                    echo "                <li class=\"pager__item pager__item--last\">
                  <a href=\"";
                    // line 141
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, false, true, 141), "href", [], "any", false, false, true, 141), 141, $this->source), "html", null, true);
                    echo "\" title=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, false, true, 141), "title", [], "any", false, false, true, 141), 141, $this->source), "html", null, true);
                    echo "\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, false, true, 141), "attributes", [], "any", false, false, true, 141), 141, $this->source), "href", "title"), "html", null, true);
                    echo ">
                    <span class=\"visually-hidden\">";
                    // line 142
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, false, true, 142), "reader_text", [], "any", false, false, true, 142), 142, $this->source), "html", null, true);
                    echo "</span>
                    <span aria-hidden=\"true\">";
                    // line 143
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, false, true, 143), "text", [], "any", false, false, true, 143), 143, $this->source), "html", null, true);
                    echo "</span>
                  </a>
                </li>
              ";
                } else {
                    // line 147
                    echo "                <li class=\"pager__item pager__item--last\">
                  <span aria-hidden=\"true\" role=\"presentation\">";
                    // line 148
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["items"] ?? null), "last", [], "any", false, false, true, 148), "text", [], "any", false, false, true, 148), 148, $this->source), "html", null, true);
                    echo "</span>
                </li>
              ";
                }
                // line 151
                echo "            ";
            }
            // line 152
            echo "          </ul>
      ";
            // line 153
            if (($context["scrollpane"] ?? null)) {
                // line 154
                echo "        </div>
      ";
            }
            // line 156
            echo "  </nav>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/pagerer/templates/pagerer-base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  352 => 156,  348 => 154,  346 => 153,  343 => 152,  340 => 151,  334 => 148,  331 => 147,  324 => 143,  320 => 142,  312 => 141,  309 => 140,  306 => 139,  303 => 138,  301 => 137,  298 => 136,  292 => 133,  289 => 132,  282 => 128,  278 => 127,  270 => 126,  267 => 125,  264 => 124,  261 => 123,  259 => 122,  253 => 119,  250 => 118,  247 => 117,  245 => 116,  239 => 115,  233 => 113,  228 => 110,  226 => 109,  223 => 108,  215 => 107,  210 => 106,  208 => 105,  203 => 103,  200 => 102,  198 => 101,  193 => 100,  191 => 99,  186 => 98,  183 => 97,  178 => 96,  176 => 95,  170 => 92,  167 => 91,  164 => 90,  162 => 89,  159 => 88,  153 => 85,  150 => 84,  143 => 80,  139 => 79,  131 => 78,  128 => 77,  125 => 76,  122 => 75,  120 => 74,  117 => 73,  111 => 70,  108 => 69,  101 => 65,  97 => 64,  89 => 63,  86 => 62,  83 => 61,  80 => 60,  77 => 58,  70 => 55,  68 => 54,  64 => 53,  61 => 52,  55 => 51,  53 => 50,  49 => 49,  47 => 48,  43 => 47,  41 => 44,  40 => 43,  39 => 41,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/pagerer/templates/pagerer-base.html.twig", "/var/www/exam/web/modules/contrib/pagerer/templates/pagerer-base.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 41, "if" => 48, "for" => 96);
        static $filters = array("escape" => 47, "t" => 53, "without" => 63);
        static $functions = array("attach_library" => 47);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
                ['escape', 't', 'without'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
